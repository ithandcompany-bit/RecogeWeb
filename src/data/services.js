import {
  FaMountain,
  FaFlask,
  FaGlobe,
  FaWater,
  FaHardHat,
  FaDraftingCompass,
  FaLeaf,
  FaMapMarkedAlt,
  FaTasks,
  FaTint,
  FaHome,
  FaTruck,
  FaClipboardCheck
} from "react-icons/fa";

import geotech from "../assets/images/services/ser1.jpeg";
import labo from "/images/serImages/labo.png";
import geo from "../assets/images/services/geological.jpeg";
import hydro from "../assets/images/services/Hydrological.png";
import civil from "../assets/images/services/const3.jpeg";
import arch from "/images/S6.png";
import env from "../assets/images/services/Hydrological.png";
import land from "../assets/images/services/land surveying.jpeg";
import constr from "../assets/images/services/project management.png";
import drain from "../assets/images/services/watersupply.jpeg";
import value from "../assets/images/services/propertyvalue.jpeg";
import general from "../assets/images/services/general supply.jpeg";
import struct from "/images/S1.png";



export const services = [
  {
    id: 1,
    title: "Geotechnical & Site Investigation",
     group: "Geotechnical & Laboratory",
    icon: FaMountain,
    image: geotech,
    description:
      "Comprehensive geotechnical investigations including borehole drilling, soil exploration, in-situ testing, laboratory analysis, and engineering recommendations for safe foundation design."
  },

  {
    id: 2,
    title: "Material Testing & Laboratory Services",
     group: "Geotechnical & Laboratory",
    icon: FaFlask,
    image: labo,
    description:
      "Professional laboratory testing of concrete, soil, aggregates, asphalt, steel, and other construction materials to ensure compliance with engineering standards."
  },

  {
    id: 3,
    title: "Geological Study",

     group: "Geotechnical & Laboratory",
    icon: FaGlobe,
   image: geo,
    description:
      "Detailed geological assessments that evaluate ground conditions, rock formations, and geological risks for infrastructure and construction projects."
  },

  {
    id: 4,
    title: "Hydrological Study",
     group: "Geotechnical & Laboratory",
    icon: FaWater,
    image: hydro,
    description:
      "Hydrological investigations, flood assessments, watershed analysis, and water resource studies supporting sustainable infrastructure development."
  },

  {
    id: 5,
    title: "Civil Engineering & Construction",
     group: "Engineering & Design",
    icon: FaHardHat,
    image: civil,
    description:
      "Professional construction services for residential, commercial, industrial, and public infrastructure projects delivered with quality and safety."
  },

  {
    id: 6,
    title: "Architectural & Structural Design",
     group: "Engineering & Design",
    icon: FaDraftingCompass,
    image: arch,
    description:
      "Innovative architectural planning and structural engineering design that combines functionality, aesthetics, durability, and compliance."
  },

  {
    id: 7,
    title: "Environmental Studies",
     group: "Surveying & Environment",
    icon: FaLeaf,
    image: env,
    description:
      "Environmental assessments and impact studies that ensure projects comply with environmental regulations and sustainable development practices."
  },

  {
    id: 8,
    title: "Land Surveying & Mapping",

    group: "Surveying & Environment",

    icon: FaMapMarkedAlt,
   image: land,
    description:
      "Accurate topographical surveys, boundary surveys, engineering surveys, GIS mapping, and land documentation services."
  },

  {
    id: 9,
    title: "Construction Project Management",
      group: "Engineering & Design",
    icon: FaTasks,
    image: constr,
    description:
      "Complete project planning, supervision, scheduling, quality control, contract administration, and successful project delivery."
  },

  {
    id: 10,
    title: "Drainage & Water Supply Infrastructure",
      title: "Environmental Studies",
    icon: FaTint,
    image: drain,
    description:
      "Design and implementation of drainage systems, water supply networks, hydraulic structures, and related civil infrastructure."
  },

  {
    id: 11,
    title: "Property Valuation",
    icon: FaHome,
    group: "Property & Support",
    image: value,
    description:
      "Professional valuation services for residential, commercial, industrial, and investment properties using recognized valuation standards."
  },

  {
    id: 12,
    title: "General Supply",
     group: "Property & Support",
    icon: FaTruck,
    image: general,
    description:
      "Reliable supply of construction materials, engineering equipment, technical products, and project support resources."
  },

  {
    id: 13,
    title: "Structure Audit",
    group: "Engineering & Design",
    icon:FaClipboardCheck,
    image: struct,
    description:
"We conduct comprehensive structural assessments to evaluate the safety, stability, and overall condition of existing buildings and infrastructure. Our audits identify structural deficiencies, assess compliance with engineering standards, and provide practical recommendations for maintenance, strengthening, rehabilitation, or future development."  }
];

export default services;