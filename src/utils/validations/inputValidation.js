import { vacancySchema } from "./vacancySchema";

const validateREGEX = (data, dataType, pattern, required) => {
  if (!!required && data === undefined) return "is empty";

  if (!required && data === undefined) return "valid";

  if (typeof data !== dataType) return `not a ${dataType}`;

  if (!!pattern) {
    const dataString = data.toString();
    if (!dataString.match(pattern)) return "invalid pattern";
  }

  return "valid";
};

const validateObj = (schemaName, object) => {
  let schema;
  switch (schemaName) {
    case "vacancySchema":
      schema = vacancySchema
      break;
  }

  const messages = [];

  Object.entries(schema).map(([key, value]) => {
    const message = validateREGEX(
      object[key],
      value.dataType,
      value.pattern,
      value.required
    );
    if (message !== "valid") messages.push({ key, message });
  });

  if (messages.length > 0) return messages;

  return "ok";
};


export { validateObj, validateREGEX };
