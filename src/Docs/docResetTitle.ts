import { Doc } from "@/Interfaces/Doc";
import { resetTitle } from "tab-goes-brrr";

const exampleResetTitle = `import { resetTitle } from 'annoying-title';

// Resets title to original value (before tampering)
resetTitle();
`; 

export const docResetTitle: Doc = {
	title: "resetTitle",
	functionName: "resetTitle",
	description: 'Resets the title, undoing any other swapping or messing with the title done by this library.',
	codeBlocks: [
		{
			codeString: exampleResetTitle,
			onReset: () => resetTitle(),
			onRun: () => resetTitle(),
		},
	],
}