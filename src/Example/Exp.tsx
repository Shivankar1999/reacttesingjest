type nameProps = {
  name?: string;
};

export const Exp = (props: nameProps) => {
  return <div>Name {props.name}</div>;
};
