import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { action } from "../redux/actions/action";
import ItemCard from "../components/ItemCard";
import ReactPaginate from "react-paginate";

const List = () => {
  const { id } = useParams(); // URL 뒤에 있는 숫자 읽어오기
  const dispatch = useDispatch();
  const allList = useSelector((state) => state.allData); // api를 통해 받아온 데이터
  // console.log("111", allList);
  const { items, totalCount, numOfRows } = useSelector((state) => state.allData);
  // 목록 데이터, 전체 데이터 수, 한번에 받아오는 데이터 수
  const [page, setPage] = useState(1);

  // 지역코드가 바뀔 때만 호출
  useEffect(() => {
    dispatch(action.getFirst(id));
    setPage(1); // 현재 페이지는 1로 셋팅
  }, [id]);

  // 지역코드와 페이지가 바뀔 때 호출
  useEffect(() => {
    dispatch(action.getList(id, page));
  }, [id, page]);

  // 페이지 숫자가 바뀌면 호출되는 함수
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  return (
    <div>
      <ItemCard list={allList} />
      <div className="pagination">
        {items && (
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            marginPagesDisplayed={0}
            pageCount={Math.ceil(totalCount / numOfRows)} // 전체 페이지 수
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel=""
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1} // 현재 페이지
          />
        )}
      </div>
    </div>
  );
};

export default List;
