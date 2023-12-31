"use client";

import {
  Code,
  Flex,
  Heading,
  Img,
  ListItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { CodeBlock } from "./CodeBlock";
import { CodeBlocks, PropsType } from "@/Interfaces/Doc";
import { anchorFromTitle } from "@/Helpers/anchor";



export const Feature = ({
	functionName,
  title,
  description,
  props = [],
  codeBlocks,
}: {
	functionName: string;
  title: string;
  description: string | React.ReactNode;
  props?: PropsType[];
  codeBlocks: CodeBlocks[];
}) => {
  return (
    <VStack spacing={6} alignItems={"flex-start"}>
      <Heading as="h3" size="md" id={anchorFromTitle(functionName)} marginTop={12}>
        <Code colorScheme="yellow">{title}</Code>
      </Heading>
      <Text>{description}</Text>
      <VStack spacing={4} alignItems={"flex-start"}>
        <UnorderedList>
          {props.map((prop: any) => (
            <ListItem key={prop.name} marginBottom={4}>
              <Code>{prop.name}</Code> :{" "}
              <Code colorScheme="yellow">{prop.type}</Code> - {prop.description}
            </ListItem>
          ))}
        </UnorderedList>
      </VStack>
      {codeBlocks.map(({ title, codeString, onReset, onRun }) => (
        <CodeBlock
          key={codeString}
          code={codeString}
					title={title}
          language="javascript"
          hasResetButton
          hasRunButton
          onReset={onReset}
          onRun={onRun}
        />
      ))}
    </VStack>
  );
};
