import {
    FaFlask,
    FaHelmetSafety,
    FaEarthAfrica,
    FaHouse
} from "react-icons/fa6";

export const serviceGroups = [

    {

        id:1,

        title:"Geotechnical & Laboratory",

        icon:FaFlask,

        services:[

            "Site Investigations",

            "Material Testing",

            "Geological Studies",

            "Hydrological Studies"

        ]

    },

    {

        id:2,

        title:"Engineering & Design",

        icon:FaHelmetSafety,

        services:[

            "Civil Engineering",

            "Architectural & Structural Design",

            "Project Management",

            "Structure Audit"

        ]

    },

    {

        id:3,

        title:"Surveying & Environment",

        icon:FaEarthAfrica,

        services:[

            "Land Surveying",

            "Environmental Studies",

            "Drainage Infrastructure"

        ]

    },

    {

        id:4,

        title:"Property & Support",

        icon:FaHouse,

        services:[

            "Property Valuation",

            "General Supply"

        ]

    }

];

export default serviceGroups;