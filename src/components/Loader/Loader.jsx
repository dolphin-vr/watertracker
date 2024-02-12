import { BackDrop, LoaderCircle, LoaderWave } from "./Loader.styled"

export const Loader = () => {
    return (
        <BackDrop>
            <LoaderCircle>
                <LoaderWave />
                {/* </LoaderWave> */}
            </LoaderCircle>
        </BackDrop>
	)
}