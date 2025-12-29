
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private static getApiKey() {
    return process.env.API_KEY;
  }

  static async generatePetVideo(imageBytes: string, prompt: string, aspectRatio: '16:9' | '9:16') {
    const ai = new GoogleGenAI({ apiKey: this.getApiKey() });
    
    try {
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt || 'A happy pet playing in a sunny garden, highly detailed, professional cinematography',
        image: {
          imageBytes: imageBytes,
          mimeType: 'image/jpeg',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) throw new Error("Video link not found");

      const response = await fetch(`${downloadLink}&key=${this.getApiKey()}`);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error: any) {
      if (error?.message?.includes("Requested entity was not found")) {
        throw new Error("KEY_EXPIRED");
      }
      throw error;
    }
  }
}
