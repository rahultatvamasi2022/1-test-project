import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";

function Header() {
  return (
    <header className="w-full flex items-center text-white bg-headerBackground">
      <div className="w-full pl-[300px] pr-[100px] py-5 flex items-center justify-between">
        <div className="w-[370px] h-10 bg-white bg-opacity-10 rounded-md">
          <form className="w-full h-full flex items-center">
            <span>
              <SearchRoundedIcon
                className="text-[#69D600] mx-2"
                style={{ fontSize: "22px" }}
              />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="h-full w-full text-md outline-none bg-white bg-opacity-0"
            />
          </form>
        </div>
        <div className="flex items-center">
          <div className="flex pr-[30px]">
            <NotificationsRoundedIcon style={{ fontSize: "22px" }} />
            <span></span>
          </div>
          <div className="flex px-[40px] border-l ">
            <p>
              <span>Help</span>
            </p>
            <HelpOutlineRoundedIcon
              className="ml-1"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="flex px-[40px] border-x">
            <p>
              <span>Support</span>
            </p>
            <HeadsetMicRoundedIcon
              className="ml-1"
              style={{ fontSize: "22px" }}
            />
          </div>
          <div className="flex items-center pl-[40px]">
            <div className="mr-2">
              <span>Hi, </span>
              <span>Sean</span>
            </div>
            <div className="w-[43px] h-[43px] flex items-center justify-center font-normal text-[23px] bg-buttonBackground rounded-md">
              <span>S</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
