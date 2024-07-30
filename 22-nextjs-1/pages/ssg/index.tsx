import { Avatar } from "@/types/types";
import { Tiles } from "@/components/Tiles";

export const getStaticProps = async () => {
  const num = 5;
  const url = `https://tinyfac.es/api/data?limit=${num}&quality=0`;
  const res = await fetch(url);
  const data: Avatar[] = await res.json();
  return { props: { data } };
};

export default function Page({ data }: { data: Avatar[] }) {
  return <Tiles data={data} />;
}
