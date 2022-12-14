import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Tr from "./Tr";
import Post from "./Post";
import Modal from "./Modal";
import Layout from "../components/Layout";
import Styles from "../styles/FestivalList.module.css";

const FestivalList = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const nextid = useRef(11);

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSave = (data) => {
    if (data.id) {
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                Content: data.Content,
                period: data.period,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((info) =>
        info.concat({
          id: nextid.current,
          name: data.name,
          Content: data.Content,
          period: data.period,
          website: data.website,
        })
      );
      nextid.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      Content: item.Content,
      period: item.period,
      website: item.website,
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  };

  const [isCheck, setCheck] = useState(false);
  const [isChecka, setChecka] = useState(false);
  const [isCheckb, setCheckb] = useState(false);
  const [isCheckc, setCheckc] = useState(false);
  const [Checkbx, setCheckbx] = useState(false);

  return (
    <Layout>
      <div className="container max-w-screen-lg mx-auto ">
        <div className={Styles.right}>
          <label>
            <input
              className={Styles.checkboxa}
              type="checkbox"
              onClick={() => {
                // setCheck??? state?????? ???????????????.
                // e??? ???????????? ????????????. ????????? ???????????? !?????????????????? ?????? ???????????? false -> true
                setCheckbx((e) => !e);
              }}
            ></input>
          </label>
          <img className={Styles.imga} src="images/pngegg.png"></img>
        </div>
        <div className="text-xl font-bold mt-5 mb-3 text-center">
          ?????? ?????? ?????????
        </div>
        <button
          className={Styles.btn}
          onClick={() => {
            // setCheck??? state?????? ???????????????.
            // e??? ???????????? ????????????. ????????? ???????????? !?????????????????? ?????? ???????????? false -> true
            setCheck((e) => !e);
            setChecka(false);
            setCheckb(false);
            setCheckc(false);
          }}
        >
          {isCheck ? "??????" : "-"}
        </button>
        <button
          className={Styles.btn}
          onClick={() => {
            setCheck(false);
            setChecka((e) => !e);
            setCheckb(false);
            setCheckc(false);
          }}
        >
          {isChecka ? "??????" : "-"}
        </button>
        <button
          className={Styles.btn}
          onClick={() => {
            // setCheck??? state?????? ???????????????.
            // e??? ???????????? ????????????. ????????? ???????????? !?????????????????? ?????? ???????????? false -> true
            setCheck(false);
            setChecka(false);
            setCheckb((e) => !e);
            setCheckc(false);
          }}
        >
          {isCheckb ? "??????" : "-"}
        </button>
        <button
          className={Styles.btn}
          onClick={() => {
            setCheck(false);
            setChecka(false);
            setCheckb(false);
            setCheckc((e) => !e);
          }}
        >
          {isCheckc ? "??????" : "-"}
        </button>
        {isCheck && (
          <div className={Styles.board}>
            <table className="min-w-full table-auto text-gray-800 ">
              <thead className="justify-between">
                <tr className="bg-gray-800 opacity-80">
                  <th className="text-gray-300 px-4 py-3">No</th>
                  <th className="text-gray-300 px-4 py-3">??????</th>
                  <th className="text-gray-300 px-4 py-3">?????? ??????</th>
                  <th className="text-gray-300 px-4 py-3">?????? ??????</th>
                  <th className="text-gray-300 px-4 py-3">?????? ??????</th>
                  <th className="text-gray-300 px-4 py-3">?????? ?????????</th>
                  <th className="text-gray-300 px-4 py-3">Edit</th>
                  <th className="text-gray-300 px-4 py-3">Delete</th>
                </tr>
              </thead>
              <Tr
                info={info}
                handleRemove={handleRemove}
                handleEdit={handleEdit}
              />
            </table>
          </div>
        )}
        {isChecka && (
          <table class="table-auto">
            <thead>
              <tr>
                <th>??????</th>
                <th>??????</th>
                <th>??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        )}

        {isCheckb && (
          <table class="table-auto">
            <thead>
              <tr>
                <th>??????</th>
                <th>??????</th>
                <th>??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        )}

        {isCheckc && (
          <table class="table-auto">
            <thead>
              <tr>
                <th>??????</th>
                <th>??????</th>
                <th>??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        )}

        {Checkbx && (
          <table class="table-auto">
            <thead>
              <tr>
                <th>??????</th>
                <th>??????</th>
                <th>??????</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        )}
        <Post onSaveData={handleSave} />
        {modalOn && (
          <Modal
            selectedData={selected}
            handleCancel={handleCancel}
            handleEditSubmit={handleEditSubmit}
          />
        )}
      </div>
    </Layout>
  );
};
export default FestivalList;
