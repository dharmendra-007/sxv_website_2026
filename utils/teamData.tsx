export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  image: string;
  jpTitle?: string;
  linkedin?: string;
  email?: string;
}


export const honourableMentions: TeamMember[] = [
  {
    id: "1",
    name: "Prof. Dipak Kumar Sahoo",
    designation: "Hon'ble Vice Chancellor, VSSUT",
    jpTitle: "総長", 
    image: "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739726474/sxv/pxqyjgsihzbkrhdskehw.jpg",
    linkedin:"https://www.linkedin.com/in/aryan-rajguru-a1333230a/",
  },
  {
    id: "2",
    name: "Prof. Rakesh Roshan Dash",
    designation: "Dean, Students' Welfare, VSSUT",
    jpTitle: "学生部長",
    image: "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739726475/sxv/or6htanct1sfeocgqioh.jpg",
  },
  {
    id: "3",
    name: "Dr. Sudhansu Ranjan Das",
    designation: "Vice President, Technical Society",
    jpTitle: "技術副会長",
    image: "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739726474/sxv/oh5sshajbzordyinenyo.jpg",
  },
  {
    id: "4",
    name: "Dr. Padmanav Dash",
    designation: "Vice President, Cultural Society",
    jpTitle: "文化副会長",
    image: "https://res.cloudinary.com/dlm8mel1x/image/upload/v1739726578/sxv/heumbxcqmolex5i2b6yv.jpg",
  },
];

export const studentBodies: TeamMember[] = [
  {
    id: "5",
    name: "Aniket Palei",
    designation: "Coordinator, VASSAUNT",
    jpTitle: "調整役",
    image: "/teams/tech1.png",
    linkedin:"https://www.linkedin.com/in/aryan-rajguru-a1333230a/",
  },
  {
    id: "6",
    name: "Aditi Kar",
    designation: "Coordinator, VASSAUNT",
    jpTitle: "調整役",
    image: "/teams/aditi.jpg",
    linkedin:"https://www.linkedin.com/in/aryan-rajguru-a1333230a/",
  },
  {
    id: "7",
    name: "suhani dash",
    designation: "Coordinator, SAMAVESH",
    jpTitle: "調整役",
    image: "/teams/suhani.jpg",
    linkedin:"https://www.linkedin.com/in/aryan-rajguru-a1333230a/",
  },
];