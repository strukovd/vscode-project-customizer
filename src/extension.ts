import * as vscode from 'vscode';

// Функция для применения настроек
function applySettings(settings: vscode.WorkspaceConfiguration) {
    vscode.workspace.getConfiguration().update('workbench.colorCustomizations', settings, vscode.ConfigurationTarget.Global);
}

// Функция, вызываемая при активации расширения
export function activate(context: vscode.ExtensionContext) {

	console.log('Расширение активировано');
    vscode.window.showInformationMessage('Project Customizer Activated');



    // Слушатель события открытия рабочей области
    // vscode.workspace.onDidChangeWorkspaceFolders((event) => {
    //     const workspaceFolder = event.added[0];
    //     if (workspaceFolder) {
    //         const workspacePath = workspaceFolder.uri.fsPath;
    //         if (true ||workspacePath === '/home/user') {
    //             const customSettings = {
    //                 "workbench.colorCustomizations": {
    //                     // "editor.background": "#282A36",
    //                     "tab.activeBackground": "#282A36",
    //                     "activityBar.activeBorder": "#0bbb0b86",
    //                     "activityBar.foreground": "#959dca",
    //                     "activityBar.activeBackground": "#282A36"
    //                 },
    //             } as any;
	// 			vscode.workspace.getConfiguration().update('workbench.colorCustomizations', customSettings['workbench.colorCustomizations'], vscode.ConfigurationTarget.Global);
    //             // applySettings(customSettings);
    //         }
    //     }
    // });
}

export function deactivate() {}
