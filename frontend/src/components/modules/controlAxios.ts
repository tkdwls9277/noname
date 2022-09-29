import axios from "axios";
import list from "../dataDto";
// import list from "@/components/dataDto.ts";

/**
 * 서버에서 전체적인 todo 데이터를 가져오는 함수
 * @param
 * @returns
 */
export default function getList(): any {
    axios
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
                    title: "test data",
                    content: "test test",
                    done: false,
                },
                {
                    id: 1,
                    date: new Date(),
                    title: "test data2",
                    content: "test22 test22",
                    done: true,
                },
            ] as list[];
        });
}
