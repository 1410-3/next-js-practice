interface DataType {
  key: string;
  item: string;
  detail: string;
}

export const dataSource: DataType[] = [
  {
    key: "1",
    item: "会社名",
    detail: "株式会社1410-3",
  },
  {
    key: "2",
    item: "設立",
    detail: "2024年7月29日",
  },
  {
    key: "3",
    item: "代表者",
    detail: "1410-3",
  },
  {
    key: "4",
    item: "所在地",
    detail: "広島県安芸郡府中町石井城1-1-101",
  },
  {
    key: "5",
    item: "資本金",
    detail: "4円ぐらい",
  },
  {
    key: "6",
    item: "従業員数",
    detail: "1名",
  },
  {
    key: "7",
    item: "事業内容",
    detail: "地域清掃",
  },
];

export const columns = [
  {
    title: "項目",
    dataIndex: "item",
    key: "item",
    width: "30%",
    render: (text: string) => <strong>{text}</strong>,
  },
  {
    title: "詳細",
    dataIndex: "detail",
    key: "detail",
  },
];
