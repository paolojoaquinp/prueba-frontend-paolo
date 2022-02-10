declare module "*.png" {
    const value: any;
    export default value;
}
declare module "*.woff2";

type Props = {
    listView: any;
    selectedCard: number;
    onClicked: () => void;
}