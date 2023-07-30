export interface ILandlord {
  value: string;
  label: string;
}

export const capitalize = (str: any) => {
  if (str) {
    str = str.split(" ");
    for (let i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(" ");
  }
};

export const landlordTypes: ILandlord[] = [
  {
    value: "Owner",
    label: "I manage my own rental(s)",
  },
  {
    value: "Manager",
    label: "I manage rentals for others",
  },
  {
    value: "Owner and Manager",
    label: "I manage a mix of both",
  },
  {
    value: "None yet",
    label: "I do not manage any rentals yet",
  },
  {
    value: "Rental Broker",
    label: "I am an apartment or rental broker",
  },
];

export const ExperienceLevel: ILandlord[] = [
  {
    value: "less than 1 year",
    label: "less than 1 year",
  },
  {
    value: "1-4 years",
    label: "1-4 years",
  },
  {
    value: "5-10 years",
    label: "5-10 years",
  },
  {
    value: "More than 10 years",
    label: "More than 10 years",
  },

  {
    value: "I do not manage any rentals yet",
    label: "I do not manage any rentals yet",
  },
];

export const RegistrationInputFields = [
  {
    name: "firstName",
    label: "First Name",
    placeholder: "First Name",
  },
  {
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Email",
  },
  {
    name: "address1",
    label: "Address 1",
    placeholder: "Address 1",
  },
  {
    name: "address2",
    label: "Address 2",
    placeholder: "Address 2",
  },

  {
    name: "phoneNumber",
    label: "Phone Number",
    placeholder: "Phone Number",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm Password",
  },
];

export const nigeriaStates = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "Federal Capital Territory (FCT)",
];

export const selectValues = [
  {
    value: "Google",
    key: "google",
  },
  {
    value: "Facebook",
    key: "facebook",
  },
  {
    value: "Instagram",
    key: "instagram",
  },
  {
    value: "Twitter",
    key: "twitter",
  },
  {
    value: "LinkedIn",
    key: "linkedin",
  },
];
