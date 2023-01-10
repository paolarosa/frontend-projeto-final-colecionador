import { Cards } from "../Cards/Cards";
import set from "../../assets/seta.png";
import $ from "jquery";
import { useEffect } from "react";

export const Carrossel = ({ serie, index }: any) => {
  useEffect(() => {
    $(`#buttonRoll${index}`).on("click", function () {
      var test: any = $(this).index();
      var list: any = $(`#listColection${index}`).scrollLeft();
      console.log(index);
      $(`#listColection${index}`).animate(
        { scrollLeft: list + (Number(test === 0 && "-") + 150) },
        10
      );
    });
  }, []);
  return (
    <div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js" />
      <button id={`buttonRoll${index}`} className="button-scroll">
        <img src={set} />
      </button>
      <h2>{serie.name}</h2>
      <ul id={`listColection${index}`}>
        <span />
        <Cards serie={serie} />
      </ul>
    </div>
  );
};
