import {
  ALL_FILTER_STATE,
  DONE_FILTER_STATE,
  UNDONE_FILTER_STATE,
} from "../constants/appConstants";
import SharedBtn from "./SharedButton";

function FilterBtns({ filterBtnClick }) {
  return (
    <div className="buttons">
      <SharedBtn
        onClick={() => filterBtnClick(ALL_FILTER_STATE)}
        name="All"
      />
      <SharedBtn
        onClick={() => filterBtnClick(DONE_FILTER_STATE)}
        name="Done"
      />
      <SharedBtn
        onClick={() => filterBtnClick(UNDONE_FILTER_STATE)}
        name="Undone"
      />
    </div>
  );
}

export default FilterBtns;
