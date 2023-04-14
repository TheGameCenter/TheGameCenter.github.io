Dim objShell, objFSO, objFile, objWMIService, colItems, objItem
Dim strScriptName, strStartupFolder, strStartupPath, strComputerName, strIPAddress, strPingCommand

Set objShell = CreateObject("WScript.Shell")
Set objFSO = CreateObject("Scripting.FileSystemObject")

strScriptName = objFSO.GetFileName(WScript.ScriptFullName)
strStartupFolder = objShell.SpecialFolders("Startup")
strStartupPath = objFSO.BuildPath(strStartupFolder, strScriptName)

strComputerName = objShell.ExpandEnvironmentStrings("%COMPUTERNAME%")
strIPAddress = ""

Set objWMIService = GetObject("winmgmts:{impersonationLevel=impersonate}!\\.\root\cimv2")
Set colItems = objWMIService.ExecQuery("Select * from Win32_NetworkAdapterConfiguration Where IPEnabled=TRUE")
For Each objItem in colItems
    strIPAddress = objItem.IPAddress(0)
    Exit For
Next

strPingCommand = "ping -t " & strIPAddress

Set objFile = objFSO.OpenTextFile(strStartupPath, 2, True)
objFile.WriteLine(strPingCommand)
objFile.Close

Set objShell = Nothing
Set objFSO = Nothing
Set objWMIService = Nothing
