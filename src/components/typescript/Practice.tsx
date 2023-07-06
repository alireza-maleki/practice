import React, { useState } from "react";

interface Props {
  name: string;
  email: string;
  password: string;
  age: number;
  isMarried: string[];
  country: Country;
}

enum Country {
  Iran = "Iran",
  Brazil = "Brazil"
}

const Practice = (props: Props) => {
  const [name, setName] = useState<string>("");

  const plusCounter = (id: number): string => {
    return "ali";
  };

  return <div>Practice</div>;
};

export default Practice;
