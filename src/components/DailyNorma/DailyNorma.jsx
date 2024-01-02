import { useSelector } from "react-redux";
// import { getPortionsList } from "../../redux/todayOperations.js";
import bottleImg from "../../images/bottle-mainPage-mobile.png";
import { selectUserNorma } from "../../redux/user/userSelectors";

export const DailyNorma = () => {
  const dailyNorma = useSelector(selectUserNorma);

  function onChangeDailyNorma() {
    console.log("change dailyNorma");
  }

  return (
    <>
      <div
        style={{
          maxWidth: "165px",
          padding: "8px 20px",
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
          border: "1px solid #ECF2FF",
          background: "#FFF",
          boxShadow: "0px 4px 8px 0px rgba(158, 187, 255, 0.12)",
        }}
      >
        <p
          style={{
            margin: "0px",
            paddingBottom: "12px",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "1.33",
          }}
        >
          My daily norma
        </p>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: "0px",
            color: "#407BFF",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "100%",
          }}
        >
          <span>{dailyNorma}</span>
          <span
            style={{
              padding: "0px 12px 0px 5px",
            }}
          >
            L
          </span>
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "#8BAEFF",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "125%",
            }}
            type="button"
            onClick={() => onChangeDailyNorma()}
          >
            Edit
          </button>
        </p>
      </div>
      <img
        src={bottleImg}
        alt="img"
        style={{
          maxWidth: "280px",
          padding: "8px 0 16px",
        }}
      />
    </>
  );
};
