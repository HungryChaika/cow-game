import { endGame, startGame, restartGame } from "../index";
import { Arrow, Game } from "../Game";
import { ui } from "./UI";

export class EventHandler {
    game: Game;
    private static selectedItem: HTMLElement | null = null;
    private mouseX!: number;
    private mouseY!: number;

    constructor(game: Game) {
        this.game = game;

        (document.getElementById('start-game-button') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            startGame();
        });

        (document.getElementById('end-game-button') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            endGame();
        });

        (document.getElementById('restart-game-button') as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            restartGame();
        });

        document.addEventListener('mousedown', (e: MouseEvent) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (EventHandler.selectedItem) {
                EventHandler.selectedItem.style.top = `${-this.mouseY + e.clientY}px`;
                EventHandler.selectedItem.style.left = `${-this.mouseX + e.clientX}px`;
            }
        });

        document.addEventListener('mouseup', (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement;
            if (EventHandler.selectedItem && targetElement) {
                const gameObject = this.game.findMapObjectByHtmlElement(targetElement);
                if (!gameObject) {
                    const coordinates = this.game.getFieldCoordinates(targetElement);
                    const arrow = this.game.findArrowByHtmlElement(EventHandler.selectedItem);
                    if (coordinates && arrow) {
                        targetElement.style.zIndex = '10';
                        targetElement.addEventListener('mousedown', this.onArrowMousedown);
                        this.game.placeArrowToMap(arrow, coordinates, targetElement);
                        EventHandler.selectedItem.removeEventListener('mousedown', this.onArrowMousedown);
                    }
                    const isArrowTableElement = ui.getArrowTableElement(targetElement);
                    if (isArrowTableElement && arrow) {
                        targetElement.addEventListener('mousedown', this.onArrowMousedown);
                        this.game.placeArrowToTable(arrow, targetElement);
                        EventHandler.selectedItem.removeEventListener('mousedown', this.onArrowMousedown);
                    }
                }
                EventHandler.selectedItem.style.top = '0';
                EventHandler.selectedItem.style.left = '0';
                EventHandler.selectedItem.style.pointerEvents = '';

            }
            EventHandler.selectedItem = null;
        });

        this.addArrowsEventListeners();
    }

    addArrowsEventListeners() {
        this.game.arrows.forEach(arrow => {
            if (!arrow.coordinates) {
                this.addArrowEventListener(arrow, 'mousedown', this.onArrowMousedown);
            }
        });
    }

    onArrowMousedown(e: Event) {
        EventHandler.selectedItem = e.target as HTMLElement;
        EventHandler.selectedItem.style.pointerEvents = "none";
    }

    addArrowEventListener(arrow: Arrow, event: string, func: (e: Event) => void) {
        arrow.linkedHtmlElement.addEventListener(event, func);
    }
}
