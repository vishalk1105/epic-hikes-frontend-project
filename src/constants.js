import { jwtDecode } from "jwt-decode";

export const navBarMenu = [
  {
    key: 1,
    title: "Home",
    path: "/",
  },
  {
    key: 2,
    title: "Posts",
    path: "/Posts",
  },
  {
    key: 3,
    title: "Events",
    path: "/events",
  },
  {
    key: 4,
    title: "About Us",
    path: "/about",
  },
];

export const homeBanner = [
  {
    key: 0,
    alt: "banner1",
    imgeSrc:
      "https://cdn.pixabay.com/photo/2022/06/28/15/04/wall-7289898_1280.jpg",
  },
  {
    key: 1,
    alt: "banner2",
    imgeSrc:
      "https://i.pinimg.com/564x/20/b1/a5/20b1a5ff4c56b2a4a860c61f232ae996.jpg",
  },
  {
    key: 2,
    alt: "banner3",
    imgeSrc:
      "https://i.pinimg.com/564x/20/3a/f7/203af729e979733831543f0502bc58da.jpg",
  },
  {
    key: 3,
    alt: "banner4",
    imgeSrc:
      "https://i.pinimg.com/564x/78/aa/f0/78aaf01c252fa468def8e20ca42b258d.jpg",
  },
];

export const getUser = () => {
  let token = localStorage.getItem("token");
  const user = token ? jwtDecode(token) : null;
  return user;
};
