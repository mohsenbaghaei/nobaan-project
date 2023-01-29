import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/logo.svg";
import "./Components.css";
import { HiHome } from "react-icons/hi";
import { AiOutlineShop, AiOutlineMenu } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GoUnverified } from "react-icons/go";
import { useSelector, useDispatch } from "react-redux";
import { CurrentPage, changePage } from "../redux/menu/menuSlice";

const Header = () => {
  const [headerDot, setHeaderDot] = useState(false);
  const currentPage = useSelector(CurrentPage);
  const dispatch = useDispatch();

  const handlePage = (page: string) => {
    dispatch(changePage(page));
  };

  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <AiOutlineMenu
          className="headerDot"
          onClick={() => setHeaderDot(!headerDot)}
        />
        <div className="pages">
          <Link
            to="/"
            className={
              currentPage === "home" ? "currentPage headerLink" : "headerLink"
            }
            onClick={() => handlePage("home")}
          >
            <HiHome className="headerIcon" />
            Home
          </Link>
          <Link
            to="/products"
            className={
              currentPage === "products"
                ? "currentPage headerLink"
                : "headerLink"
            }
            onClick={() => handlePage("products")}
          >
            <AiOutlineShop className="headerIcon" />
            Products
          </Link>
          <Link
            to="/users"
            className={
              currentPage === "users" ? "currentPage headerLink" : "headerLink"
            }
            onClick={() => handlePage("users")}
          >
            <BiUserCircle className="headerIcon" />
            Users
          </Link>
          <Link
            to="/verification"
            className={
              currentPage === "verification"
                ? "currentPage headerLink"
                : "headerLink"
            }
            onClick={() => handlePage("verification")}
          >
            <GoUnverified className="headerIcon" />
            Verification
          </Link>
        </div>
      </div>
      <div className={headerDot ? "showPage" : "notShow"}>
        <div className="showPageitem">
          <Link
            to="/"
            className={
              currentPage === "home" ? "currentPage headerLink" : "headerLink"
            }
            onClick={() => handlePage("home")}
          >
            <HiHome className="headerIcon" />
            Home
          </Link>
        </div>
        <div className="showPageitem">
          <Link
            to="/products"
            className={
              currentPage === "products"
                ? "currentPage headerLink"
                : "headerLink"
            }
            onClick={() => handlePage("products")}
          >
            <AiOutlineShop className="headerIcon" />
            Products
          </Link>
        </div>
        <div className="showPageitem">
          <Link
            to="/users"
            className={
              currentPage === "users" ? "currentPage headerLink" : "headerLink"
            }
            onClick={() => handlePage("users")}
          >
            <BiUserCircle className="headerIcon" />
            Users
          </Link>
        </div>
        <div className="showPageitem">
          <Link
            to="/verification"
            className={
              currentPage === "verification"
                ? "currentPage headerLink"
                : "headerLink"
            }
            onClick={() => handlePage("verification")}
          >
            <GoUnverified className="headerIcon" />
            Verification
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
