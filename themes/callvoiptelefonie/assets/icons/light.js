import { library, dom } from '@fortawesome/fontawesome-svg-core'

import { faCloud } from "@fortawesome/pro-light-svg-icons/faCloud";
import { faAngleRight } from "@fortawesome/pro-light-svg-icons/faAngleRight";
import { faDesktop } from "@fortawesome/pro-light-svg-icons/faDesktop";
import { faTabletAlt } from "@fortawesome/pro-light-svg-icons/faTabletAlt";
import { faHeadset } from "@fortawesome/pro-light-svg-icons/faHeadset";
import { faComments } from "@fortawesome/pro-light-svg-icons/faComments";
import { faPhone } from "@fortawesome/pro-light-svg-icons/faPhone";
import { faHome } from "@fortawesome/pro-light-svg-icons/faHome";
import { faBuilding } from "@fortawesome/pro-light-svg-icons/faBuilding";
import { faFileContract } from "@fortawesome/pro-light-svg-icons/faFileContract";
import { faBoxesAlt } from "@fortawesome/pro-light-svg-icons/faBoxesAlt";
import { faPiggyBank } from "@fortawesome/pro-light-svg-icons/faPiggyBank";
import { faFileSignature } from "@fortawesome/pro-light-svg-icons/faFileSignature";
import { faUserLock } from "@fortawesome/pro-light-svg-icons/faUserLock";
import { faCommentAltSmile } from "@fortawesome/pro-light-svg-icons/faCommentAltSmile";
import { faLaptop } from "@fortawesome/pro-light-svg-icons/faLaptop";
import { faCodeBranch } from "@fortawesome/pro-light-svg-icons/faCodeBranch";
import { faPhoneVolume } from "@fortawesome/pro-light-svg-icons/faPhoneVolume";
import { faMobileAlt } from "@fortawesome/pro-light-svg-icons/faMobileAlt";
import { faBoxOpen } from "@fortawesome/pro-light-svg-icons/faBoxOpen";
import { faCommentAlt } from "@fortawesome/pro-light-svg-icons/faCommentAlt";
import { faMegaphone } from "@fortawesome/pro-light-svg-icons/faMegaphone";
import { faUser } from "@fortawesome/pro-light-svg-icons/faUser";
import { faBars } from "@fortawesome/pro-light-svg-icons/faBars";
import { faSearch } from "@fortawesome/pro-light-svg-icons/faSearch";
import { faWifi } from "@fortawesome/pro-light-svg-icons/faWifi";
import { faEnvelope } from "@fortawesome/pro-light-svg-icons/faEnvelope";
import { faFile } from "@fortawesome/pro-light-svg-icons/faFile";
import { faGlobe } from "@fortawesome/pro-light-svg-icons/faGlobe";
import { faMobile } from "@fortawesome/pro-light-svg-icons/faMobile";
import { faClock } from "@fortawesome/pro-light-svg-icons/faClock";
import { faFileAudio } from "@fortawesome/pro-light-svg-icons/faFileAudio";
import { faCog } from "@fortawesome/pro-light-svg-icons/faCog";
import { faSpinner } from "@fortawesome/pro-light-svg-icons/faSpinner";
import { faTrophy } from "@fortawesome/pro-light-svg-icons/faTrophy";
import { faRocket } from "@fortawesome/pro-light-svg-icons/faRocket";
import { faCalculator } from "@fortawesome/pro-light-svg-icons/faCalculator";
import { faFax } from "@fortawesome/pro-light-svg-icons/faFax";
import { faMoneyBill } from "@fortawesome/pro-light-svg-icons/faMoneyBill";
import { faExclamationCircle } from "@fortawesome/pro-light-svg-icons/faExclamationCircle";
import { faHeartbeat } from "@fortawesome/pro-light-svg-icons/faHeartbeat";
import { faTty } from "@fortawesome/pro-light-svg-icons/faTty";
import { faWindowRestore } from "@fortawesome/pro-light-svg-icons/faWindowRestore";
import { faUnlock } from "@fortawesome/pro-light-svg-icons/faUnlock";
import { faFilePdf } from "@fortawesome/pro-light-svg-icons/faFilePdf";
import { faBell } from "@fortawesome/pro-light-svg-icons/faBell";
import { faRandom } from "@fortawesome/pro-light-svg-icons/faRandom";
import { faUsers } from "@fortawesome/pro-light-svg-icons/faUsers";
import { faArrowsH } from "@fortawesome/pro-light-svg-icons/faArrowsH";
import { faSortNumericDown } from "@fortawesome/pro-light-svg-icons/faSortNumericDown";
import { faDeaf } from "@fortawesome/pro-light-svg-icons/faDeaf";
import { faMousePointer } from "@fortawesome/pro-light-svg-icons/faMousePointer";
import { faHandPointer } from "@fortawesome/pro-light-svg-icons/faHandPointer";
import { faIdCard } from "@fortawesome/pro-light-svg-icons/faIdCard";
import { faAngleDown } from "@fortawesome/pro-light-svg-icons/faAngleDown";
import { faMobileAndroid } from "@fortawesome/pro-light-svg-icons/faMobileAndroid";
import { faMobileAndroidAlt } from "@fortawesome/pro-light-svg-icons/faMobileAndroidAlt";
import { faCheckCircle } from "@fortawesome/pro-light-svg-icons/faCheckCircle";
import { faTimesCircle } from "@fortawesome/pro-light-svg-icons/faTimesCircle";
import { faServer } from "@fortawesome/pro-light-svg-icons/faServer";
import { faCut } from "@fortawesome/pro-light-svg-icons/faCut";
import { faAd } from "@fortawesome/pro-light-svg-icons/faAd";
import { faTooth } from "@fortawesome/pro-light-svg-icons/faTooth";
import { faAbacus } from "@fortawesome/pro-light-svg-icons/faAbacus";
import { faShoppingCart } from "@fortawesome/pro-light-svg-icons/faShoppingCart";
import { faNetworkWired } from "@fortawesome/pro-light-svg-icons/faNetworkWired";
import { faCommentAltDots } from "@fortawesome/pro-light-svg-icons/faCommentAltDots";
import { faDesktopAlt } from "@fortawesome/pro-light-svg-icons/faDesktopAlt";
import { faDotCircle } from "@fortawesome/pro-light-svg-icons/faDotCircle";
import { faTimes } from "@fortawesome/pro-light-svg-icons/faTimes";
import { faCheck } from "@fortawesome/pro-light-svg-icons/faCheck";
import { faGift } from "@fortawesome/pro-light-svg-icons/faGift";
import { faCommentdots } from "@fortawesome/pro-light-svg-icons/faCommentDots";
import { faMicrophonealt } from "@fortawesome/pro-light-svg-icons/faMicrophoneAlt";
import { faToggleon} from "@fortawesome/pro-light-svg-icons/faToggleOn";

library.add(faCloud, faClock, faHeartbeat, faDotCircle, faLaptop, faCheck, faGift, faTimes, faTty, faIdCard, faCheckCircle, faWindowRestore, faNetworkWired, faCommentAltDots, faDesktopAlt, faCut, faAd, faTooth, faAbacus, faShoppingCart, faTimesCircle, faServer, faMobileAndroid,faMobileAndroidAlt, faAngleDown, faWindowRestore, faMousePointer, faHandPointer,  faRandom, faDeaf, faSortNumericDown, faArrowsH, faUsers, faFilePdf, faBell, faUnlock, faFileAudio, faCog, faSpinner, faMoneyBill, faExclamationCircle, faFax, faCalculator, faTrophy, faRocket, faSearch, faEnvelope, faFile, faMobile, faGlobe, faWifi, faBars, faUser, faMegaphone, faBoxOpen, faCommentAlt, faUserLock, faMobileAlt, faPhoneVolume, faCodeBranch, faCommentAltSmile, faFileSignature, faPiggyBank, faFileContract, faBoxesAlt, faAngleRight, faHome, faBuilding, faComments, faPhone, faDesktop, faTabletAlt, faHeadset, faCommentdots, faMicrophonealt, faToggleon);


dom.watch();
