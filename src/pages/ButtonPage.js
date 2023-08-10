import { GoBell, GoCloudOffline, GoDatabase } from 'react-icons/go'
import Button from "../components/Button";

function ButtonPage() {
    return (<div>
        <div>
            <Button success outline rounded >
                <GoBell />
                Click me!
            </Button>
        </div>
        <div>
            <Button danger outline>
            <GoCloudOffline />
                Buy now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                See Deal!
            </Button>
        </div>
        <div>
            <Button secondary rounded>Hide Ads!</Button>
        </div>
        <div>
            <Button primary rounded>Something!</Button>
        </div>
    </div>)
}

export default ButtonPage;