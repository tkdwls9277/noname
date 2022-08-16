import axios from "axios";

export default function getList() {
    axios
        .get("https://todo-list.loca.lt/list")
        .then((res) => {
            console.log(res.data);
            return res.data;
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
            ];
        });
}
