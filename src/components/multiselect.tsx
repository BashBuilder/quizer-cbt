"use client";
import MultipleSelector from "@/components/ui/multiselect";

interface SelectPropTypes {
  data: {
    label: string;
    value: string;
  }[];
  setOption: (data: string[]) => void;
}

export default function Multiselect({ data, setOption }: SelectPropTypes) {
  const handleShowValue = (data: { label: string; value: string }[]) => {
    const options: string[] = [];
    data.forEach((item) => {
      options.push(item.value);
    });
    setOption(options);
  };

  return (
    <div className="space-y-2">
      {/* <Label>Multiselect</Label> */}
      <MultipleSelector
        commandProps={{
          label: "",
        }}
        value={[]}
        onChange={handleShowValue}
        defaultOptions={data}
        placeholder=""
        hideClearAllButton
        hidePlaceholderWhenSelected
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
    </div>
  );
}
