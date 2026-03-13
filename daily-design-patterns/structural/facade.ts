// ============================================================
// Facade Pattern — AI Inference Pipeline
// ============================================================
// Complex subsystems hidden behind a simple AIFacade interface

// --- Subsystem 1: Model Loader ---
class ModelLoader {
    private modelName: string = "";
  
    load(modelName: string): void {
      this.modelName = modelName;
      console.log(`[ModelLoader] Loading model: "${modelName}"...`);
    }
  
    getModelName(): string {
      return this.modelName;
    }
  }
  
  // --- Subsystem 2: Tokenizer ---
  class Tokenizer {
    tokenize(text: string): number[] {
      const tokens = text.split(" ").map((_, i) => i + 100); // mock token IDs
      console.log(`[Tokenizer] Tokenized input into ${tokens.length} tokens.`);
      return tokens;
    }
  
    decode(tokens: number[]): string {
      return tokens.map((t) => `word${t}`).join(" ");
    }
  }
  
  // --- Subsystem 3: Inference Engine ---
  class InferenceEngine {
    run(tokens: number[], maxTokens: number): number[] {
      console.log(
        `[InferenceEngine] Running inference (max_tokens=${maxTokens})...`
      );
      // Mock: generate some output token IDs
      return Array.from({ length: maxTokens }, (_, i) => tokens[0] + i + 1);
    }
  }
  
  // --- Subsystem 4: Response Formatter ---
  class ResponseFormatter {
    format(raw: string, format: "plain" | "json"): string {
      console.log(`[ResponseFormatter] Formatting output as "${format}".`);
      if (format === "json") {
        return JSON.stringify({ response: raw });
      }
      return raw;
    }
  }
  
  // ============================================================
  // FACADE — hides all subsystem complexity
  // ============================================================
  interface GenerateOptions {
    model?: string;
    maxTokens?: number;
    format?: "plain" | "json";
  }
  
  class AIFacade {
    private loader = new ModelLoader();
    private tokenizer = new Tokenizer();
    private engine = new InferenceEngine();
    private formatter = new ResponseFormatter();
  
    generate(prompt: string, options: GenerateOptions = {}): string {
      const {
        model = "gpt-mini",
        maxTokens = 5,
        format = "plain",
      } = options;
  
      console.log("\n--- AIFacade.generate() called ---");
  
      // Step 1: Load model
      this.loader.load(model);
  
      // Step 2: Tokenize input
      const inputTokens = this.tokenizer.tokenize(prompt);
  
      // Step 3: Run inference
      const outputTokens = this.engine.run(inputTokens, maxTokens);
  
      // Step 4: Decode tokens to text
      const rawText = this.tokenizer.decode(outputTokens);
  
      // Step 5: Format response
      const result = this.formatter.format(rawText, format);
  
      console.log(`[AIFacade] Done.\n`);
      return result;
    }
  }
  
  // ============================================================
  // CLIENT CODE — only talks to the facade
  // ============================================================
  const ai = new AIFacade();
  
  // Simple usage
  const response1 = ai.generate("Hello, how are you?");
  console.log("Output:", response1);
  
  // With options
  const response2 = ai.generate("Summarize this document", {
    model: "gpt-large",
    maxTokens: 8,
    format: "json",
  });
  console.log("Output:", response2);