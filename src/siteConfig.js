const raw = {
  siteName: "CarterRigert",
  tagline: "Test Dylan",
  aboutText: "Dylans business",
  primaryColor: "#d539c0",
  service1: { title: "", description: "" },
  service2: { title: "", description: "" },
  service3: { title: "", description: "" },
  contact: {
    email: "test@gmail.com",
    phone: "555555",
    address: ""
  },
  social: {
    instagram: "",
    facebook: ""
  }
};

const isPlaceholder = (v) => !v || v.startsWith('{{');

const siteConfig = {
  ...raw,
  primaryColor: isPlaceholder(raw.primaryColor) ? '#555555' : raw.primaryColor,
};

export default siteConfig;
