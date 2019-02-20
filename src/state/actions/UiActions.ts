export const UI_OPEN_SIDEPANEL = 'UI_OPEN_SIDEPANEL';
export type UI_OPEN_SIDEPANEL = typeof UI_OPEN_SIDEPANEL;

export const UI_CLOSE_SIDEPANEL = 'UI_CLOSE_SIDEPANEL';
export type UI_CLOSE_SIDEPANEL = typeof UI_CLOSE_SIDEPANEL;

export interface CloseSidePanel {
    type: UI_CLOSE_SIDEPANEL;
}
export function closeSidePanel(): CloseSidePanel {
    return {
        type: UI_CLOSE_SIDEPANEL
    }
}

export interface OpenSidePanel {
    type: UI_OPEN_SIDEPANEL;
}
export function openSidePanel(): OpenSidePanel {
    return {
        type: UI_OPEN_SIDEPANEL
    }
}

export type SidePanelAction = CloseSidePanel | OpenSidePanel;

export type UIAction = SidePanelAction;