import React, { FunctionComponent } from "react";
import { TemplateEnum } from "@/lib/prompt-by-template";

interface ITemplate {
  label: string;
  value: TemplateEnum;
}

export const templates: ITemplate[] = [
  { label: "Mindmap", value: TemplateEnum.MINDMAP },
  { label: "Timeline", value: TemplateEnum.TIMELINE },
  { label: "Sequence Diagram", value: TemplateEnum.SEQUENCE },
  { label: "User Journey", value: TemplateEnum.USERJOURNEY },
  { label: "Flowchart", value: TemplateEnum.FLOWCHART },
  { label: "Entity Relationship", value: TemplateEnum.ENTITYRELATIONSHIP },
  // { label: "Class Diagram", value: TemplateEnum.CLASS }, // FIXME: syntax mistake is pretty common for this
  // { label: "State Diagram", value: TemplateEnum.STATE },

];

interface ISelectTemplate {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectTemplate: FunctionComponent<ISelectTemplate> = ({ onChange }) => {
  return (
    <select onChange={onChange} className="select select-bordered select-lg">
      {templates.map((item) => (
        <option value={item.value} key={item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectTemplate;
