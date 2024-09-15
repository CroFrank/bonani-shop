interface Props {
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Checkbox(props: Props) {
  return (
    <>
      <label className="text-sm">
        <input
          type="checkbox"
          id="privacyCheckbox"
          name="privacyCheckbox"
          required
          checked={props.checked}
          onChange={props.onChange}
        />{" "}
        Suglasni ste da se vaši podaci obrađuju u skladu sa našom{" "}
        <a href="/privacy" className="text-blue-700">
          Politikom privatnosti
        </a>
      </label>
    </>
  );
}
