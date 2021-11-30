import ArrowBlueDown from '../../../assets/sprites/svg/ArrowBlueDown.svg';
import ArrowBlueLeft from '../../../assets/sprites/svg/ArrowBlueLeft.svg';
import ArrowBlueRight from '../../../assets/sprites/svg/ArrowBlueRight.svg';
import ArrowBlueUp from '../../../assets/sprites/svg/ArrowBlueUp.svg';
import ArrowRedDown from '../../../assets/sprites/svg/ArrowRedDown.svg';
import ArrowRedLeft from '../../../assets/sprites/svg/ArrowRedLeft.svg';
import ArrowRedRight from '../../../assets/sprites/svg/ArrowRedRight.svg';
import ArrowRedUp from '../../../assets/sprites/svg/ArrowRedUp.svg';
import AutoDoorH from '../../../assets/sprites/svg/AutoDoorH.png';
import AutoDoorHActivated from '../../../assets/sprites/svg/AutoDoorHActivated.png';
import AutoDoorV from '../../../assets/sprites/svg/AutoDoorV.png';
import AutoDoorVActivated from '../../../assets/sprites/svg/AutoDoorVActivated.png';
import Block from '../../../assets/sprites/svg/Block.png';
import Button from '../../../assets/sprites/svg/Button.png';
import CowGreyUp from '../../../assets/sprites/svg/CowGreyUp.svg';
import CowGreyRight from '../../../assets/sprites/svg/CowGreyRight.svg';
import CowGreyDown from '../../../assets/sprites/svg/CowGreyDown.svg';
import CowGreyLeft from '../../../assets/sprites/svg/CowGreyLeft.svg';
import FenceH from '../../../assets/sprites/svg/FenceH.svg';
import FenceV from '../../../assets/sprites/svg/FenceV.svg';
import Goblet from '../../../assets/sprites/svg/Goblet.svg';
import HayBale from '../../../assets/sprites/svg/HayBale.png';
import Key from '../../../assets/sprites/svg/Key.png';
import LockDoorH from '../../../assets/sprites/svg/LockDoorH.png';
import LockDoorV from '../../../assets/sprites/svg/LockDoorV.png';
import Pillar from '../../../assets/sprites/svg/Pillar.svg';
import PitActivated from '../../../assets/sprites/svg/PitActivated.png';
import PitNonActivated from '../../../assets/sprites/svg/PitNonActivated.png';
import SlideUp from '../../../assets/sprites/svg/SlideUp.png';
import SlideRight from '../../../assets/sprites/svg/SlideRight.png';
import SlideDown from '../../../assets/sprites/svg/SlideDown.png';
import SlideLeft from '../../../assets/sprites/svg/SlideLeft.png';
import Tree from '../../../assets/sprites/svg/Tree.svg';

export const MAPPED_SPRITES = {
    ArrowBlueDown,
    ArrowBlueLeft,
    ArrowBlueRight,
    ArrowBlueUp,
    ArrowRedDown,
    ArrowRedLeft,
    ArrowRedRight,
    ArrowRedUp,
    AutoDoorH,
    AutoDoorHActivated,
    AutoDoorV,
    AutoDoorVActivated,
    Block,
    Button,
    CowGreyUp,
    CowGreyRight,
    CowGreyDown,
    CowGreyLeft,
    FenceH,
    FenceV,
    Goblet,
    HayBale,
    Key,
    LockDoorH,
    LockDoorV,
    Pillar,
    PitActivated,
    PitNonActivated,
    SlideUp,
    SlideRight,
    SlideDown,
    SlideLeft,
    Tree
}

export type SpriteName = keyof typeof MAPPED_SPRITES;
