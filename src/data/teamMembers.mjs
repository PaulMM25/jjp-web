export const company = "JJP Suppliers Services";
export const companyStatement = "Industrial solutions for safer and smarter operations";

export const teamMembers = [
  {
    slug: "paul-mejias", name: "Paul Mejias", givenName: "Paul", familyName: "Mejias",
    image: "/team/paul-mejias.jpeg",
    statement: "Connecting people, technology and industry for a more efficient tomorrow.",
    title: "Digital Transformation Director", phone: "+34 643520484",
    whatsapp: "34643520484", email: "paul.mejias@jjpsuppliersservices.com",
    linkedin: "https://www.linkedin.com/in/paul-mejias-060ab822/",
  },
  {
    slug: "juan-leon", name: "Juan E. León", givenName: "Juan", additionalName: "E.", familyName: "León",
    image: "/team/juan-leon.png",
    title: "Operations & Eng. Director", phone: "+593 99 809 6920",
    whatsapp: "593998096920", email: "juan.leon@jjpsuppliersservices.com",
    linkedin: "https://www.linkedin.com/in/juan-leon-canelon-2ab748335",
  },
  {
    slug: "jhonny-sanchez", name: "Jhonny Sánchez", givenName: "Jhonny", familyName: "Sánchez",
    image: "/team/jhonny-sanchez.png",
    title: "Sales Director", phone: "+34 665 84 38 28",
    whatsapp: "34665843828", email: "jhonny.sanchez@jjpsuppliersservices.com",
    linkedin: "https://www.linkedin.com/in/jhonny-sanchez-madarnas-49728248/",
  },
  {
    slug: "franklin-medina", name: "Franklin Medina", givenName: "Franklin", familyName: "Medina",
    image: "/team/franklin-medina.png",
    title: "Technical Manager", phone: "+58 414-7850807",
    whatsapp: "584147850807", email: "fjmedina@jjpsuppliersservices.com",
    linkedin: "https://www.linkedin.com/in/franklin-medina-880b786a/",
  },
];

export const getTeamMember = (slug) => teamMembers.find((member) => member.slug === slug);
export const telephone = (member) => member.phone.replace(/[^+\d]/g, "");
