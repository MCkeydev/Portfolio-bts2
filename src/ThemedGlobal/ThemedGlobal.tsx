import { useTheme, Global } from "@emotion/react";
import __fonts from "../fonts/__fonts.css";
import __reset from "../styles/__reset.css";

const ThemedGlobal: React.FC = () => {
    const theme = useTheme();

    return (
        <Global styles={[__reset, __fonts, {
            '#root': {
                backgroundColor: theme.palette.background,
            }
        }]}/>
    );
};

export default ThemedGlobal;
