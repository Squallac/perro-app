import useSWR from "swr";
import { useRouter } from "next/router";

import styles from "../../../styles/dog.module.css";

export default function Dog() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`/api/oneDog/${id}`);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  const { dog } = data;

  if (!dog) {
    return <div>No dog</div>;
  }

  return (
    <div className={styles.dog}>
      <h1>{dog.name}</h1>
      <h3>{dog.breed}</h3>
      <h3>Colors</h3>
      <ul>
        {dog.colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
