// interface propsLoadingButton {
//   onClick?: any;
//   title: string;
//   id?: string;
//   type?: "button" | "submit" | "reset";
//   icon?: string;
//   loading: boolean;
// }

export default function LoadingButton(props) {
  return (
    <button
      id={props.id}
      name={props.id}
      className={`bg-primary w-full md:w-auto md:px-16 py-2 md:py-3 text-white text-sm uppercase font-bold rounded-lg
      ${props.loading && "cursor-not-allowed"}
      `}
      onClick={() => (props.onClick ? props.onClick() : null)}
      type={props.type}
      disabled={props.loading}
    >
      <div>
        {!props.loading ? (
          <span>{props.title}</span>
        ) : (
          <i className="bx bx-loader-alt bx-spin text-1xl"></i>
        )}
      </div>
    </button>
  );
}
