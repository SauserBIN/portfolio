import GogungImg from '../assets/project/teamProject/teamPeriod/gogung_main.png'
import FrontEndLibraryImg from '../assets/toyProject/frontEndLibrary/frontEndLibrary_main.png'
import EzdomathIMG from "../assets/project/teamProject/EZDOMATH/ezdomath_intro.png"

const projectData = [
  {
    id: 4,
    category: "ToyProject",
    title: "FrontEnd 사전",
    subtitle: "React + Vite + 개인 프로젝트",
    tags: ["React", "Vite", "개인 프로젝트"],
    date: "2024-07-05",
    content: "React + Vite + 로컬 데이터 기반의 개인 토이프로젝트 입니다.\nCRUD의 기능을 이해하고 데이터를 전역으로 전달하는 과정을 익혀보기 위해 제작하게 되었습니다.",
    image: FrontEndLibraryImg
  },
  {
    id: 5,
    category: "MainProject",
    title: "고궁의 밤",
    subtitle: "React + Vite + 로컬 데이터 기반의 팀 프로젝트",
    tags: ["React", "팀 프로젝트", "반응형"],
    date: "2024-07-04",
    content: "React + Vite + 로컬 데이터 기반의 팀 프로젝트 입니다.\n학원 과제인 첫번째 팀 프로젝트를 통해 4명의 팀원과 협업을 통해 완성하였습니다.",
    image: GogungImg
  },
  {
    id: 6,
    category: "MainProject",
    title: "EZDOMATH",
    subtitle: "React + Vite + 로컬 데이터 기반의 팀 프로젝트",
    tags: ["React", "팀 프로젝트", "반응형"],
    date: "2024-08-06",
    content: "React + Vite + 로컬 데이터 기반의 팀 프로젝트 입니다.\n학원 과제인 두번째 팀 프로젝트를 통해 3명의 팀원과 협업을 통해 완성하였습니다.",
    image: EzdomathIMG
  },
];

export default projectData;