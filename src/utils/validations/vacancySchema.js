const vacancySchema = {
  title: {
    dataType: "string",
    pattern: /^[A-z\u00C0-\u00ff\s]{1,128}$/,
    required: true,
  },
  link: {
    dataType: "string",
    pattern: new RegExp(
      [
        /(http(s)?:\/\/.)?(www\.)?/,
        /[-a-zA-Z0-9@:%._\+~#=]{2,256}/,
        /\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
      ]
        .map(r => r.source)
        .join("")
    ),
    required: true,
  },
  company: {
    dataType: "string",
    pattern: /^[A-z\u00C0-\u00ff\s]{1,128}$/,
    required: true,
  },
  salary_from: {
    dataType: "number",
    pattern: /^\d{1,128}$/,
    required: true,
  },
  salary_to: {
    dataType: "number",
    pattern: /^\d{1,128}$/,
    required: true,
  },
  interest: {
    dataType: "number",
    pattern: /^[1-5]$/,
    required: true,
  },
  currency: {
    dataType: "string",
    pattern: /^[A-Z]{3}$/,
    required: true,
  },
  remote: {
    dataType: "boolean",
    required: true,
  },
  status: {
    dataType: "string",
    pattern: /^(interested)|(applied)|(interviewed)|(rejected)$/,
    required: true,
  },
  date_application: {
    dataType: "string",
    pattern: /^\d{4}-\d{2}-\d{2}$/,
    required: true,
  },
  notes: {
    dataType: "string",
    pattern: /^[A-z\u00C0-\u00ff\s]{1,2000}$/,
    required: true,
  },
  user_id: {
    dataType: "string",
    pattern: /^[\w\W ]+$/,
    required: true,
  },
};

export { vacancySchema };