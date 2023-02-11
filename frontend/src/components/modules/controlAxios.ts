import axios from "axios";
import list from "../dataDto";
// import list from "@/components/dataDto.ts";

/**
 * 서버에서 전체적인 todo 데이터를 가져오는 함수
 * @param
 * @returns
 */
export default async function getList() {
    return await axios
        .get("/list")
        .then((res) => {
            console.log(res.data);
            return res.data.list;
        })
        .catch((ex) => {
            console.log("list get error", ex);
            return [
                {
                    id: 0,
                    date: new Date(),
                    title: "plus표시 클릭 시 insert api 호출",
                    content: "test test",
                    done: false,
                },
                {
                    id: 1,
                    date: new Date(),
                    title: "done 상태에 따라 체크와 가운데 줄",
                    content: "test22 test22",
                    done: true,
                },
                {
                    id: 2,
                    date: new Date(),
                    title: "엑스표시 클릭 시 delete api 호출",
                    content: "test22 test22",
                    done: true,
                },
            ] as list[];
        });
}
