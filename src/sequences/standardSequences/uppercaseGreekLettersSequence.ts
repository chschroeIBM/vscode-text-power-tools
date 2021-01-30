import { AArraySequenceBase } from "../arraySeqenceBase";

export class UppercaseGreekLettersSequence extends AArraySequenceBase {
	public get name(): string {
		return "Uppercase letters";
	}

	public get array(): string[] {
		return [
			"Α", "Β", "Γ", "Δ", "Ε", "Ζ", "Η", "Θ",
			"Ι", "Κ", "Λ", "Μ", "Ν", "Ξ", "Ο", "Π",
			"Ρ", "Σ", "Τ", "Υ", "Φ", "Χ", "Ψ", "Ω"
		];
	}
}
