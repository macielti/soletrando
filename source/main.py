import wx

class OperatorFrame(wx.Frame):
    def __init__(self):
        wx.Frame.__init__(self, None, size=(400, 300), title='Painel de Operação')
        painel = wx.Panel(self)

        headText = wx.StaticText(self, label="Painel do Professor")
        headTextFont = wx.Font(18, wx.DEFAULT, wx.NORMAL, wx.NORMAL)
        headText.SetFont(headTextFont)
        descText = wx.StaticText(self, label="Esta janela deve estar na tela do computador ou notebook.")

        correctInputLabel = wx.StaticText(self, label="Palavra a Ser Soletrada:")
        correctInputCtrl = wx.TextCtrl(self, size=(300, -1))

        studentInputLabel = wx.StaticText(self, label="Entrada do Aluno:")
        studentInputCtrl = wx.TextCtrl(self, size=(300, -1))

        correctionButton = wx.Button(self, label="Corrigir")
        newButton = wx.Button(self, label="Nova Palavra")

        mainSizer = wx.BoxSizer(wx.VERTICAL)
        headTextSizer = wx.BoxSizer(wx.HORIZONTAL)
        descTextSizer = wx.BoxSizer(wx.HORIZONTAL)
        correctInputLabelSizer = wx.BoxSizer(wx.HORIZONTAL)
        correctInputCtrlSizer = wx.BoxSizer(wx.HORIZONTAL)
        studentInputLabelSizer = wx.BoxSizer(wx.HORIZONTAL)
        studentInputCtrlSizer = wx.BoxSizer(wx.HORIZONTAL)
        buttonsSizer = wx.BoxSizer(wx.HORIZONTAL)

        headTextSizer.Add(headText, 0, wx.ALL, 5)
        descTextSizer.Add(descText, 0, wx.ALL, 5)
        correctInputLabelSizer.Add(correctInputLabel, 0, wx.ALL, 5)
        correctInputCtrlSizer.Add(correctInputCtrl, 0, wx.ALL, 5)
        studentInputLabelSizer.Add(studentInputLabel, 0, wx.ALL, 5)
        studentInputCtrlSizer.Add(studentInputCtrl, 0, wx.ALL, 5)
        buttonsSizer.Add(correctionButton, 0, wx.ALL, 5)
        buttonsSizer.Add(newButton, 0, wx.ALL, 5)

        mainSizer.Add(headTextSizer, 0, wx.CENTER)
        mainSizer.Add(descTextSizer, 0, wx.LEFT, 10)
        mainSizer.Add(correctInputLabelSizer, 0, wx.LEFT, 10)
        mainSizer.Add(correctInputCtrlSizer, 0, wx.LEFT, 10)
        mainSizer.Add(studentInputLabelSizer, 0, wx.LEFT, 10)
        mainSizer.Add(studentInputCtrlSizer, 0, wx.LEFT, 10)
        mainSizer.Add(buttonsSizer, 0, wx.LEFT, 10)

        self.SetSizer(mainSizer)
        self.Show()

        self.presentation = PresentationFrame(self)
        self.presentation.Show()

class PresentationFrame(wx.Frame):
    def __init__(self, parent):
        wx.Frame.__init__(self, parent, size=(400, 400), title='Soletrando')
        self.parent = parent

        panel = wx.Panel(self)
        # main sizer
        mainSizer = wx.BoxSizer(wx.VERTICAL)

        headTextPresentation = wx.StaticText(self, label="Soletrando")
        headTextPresentationFont = wx.Font(18, wx.DEFAULT, wx.NORMAL, wx.NORMAL)
        headTextPresentation.SetFont(headTextPresentationFont)
        # sizer
        headTextPresentationSizer = wx.BoxSizer(wx.HORIZONTAL)
        # add to sizer
        headTextPresentationSizer.Add(headTextPresentation, 0, wx.ALL, 5)
        # add to main sizer
        mainSizer.Add(headTextPresentationSizer, 0, wx.CENTER, 0)

        topLine = wx.StaticLine(self, size=(9000,3))
        # sizer
        topLineSizer = wx.BoxSizer(wx.HORIZONTAL)
        # add to sizer
        topLineSizer.Add(topLine, 0, wx.ALL, 5)
        # add to main sizer
        mainSizer.Add(topLineSizer, 0, wx.Center, 0)

        studentText = wx.StaticText(self, label="Soletrando")
        studentTextFont = wx.Font(18, wx.DEFAULT, wx.NORMAL, wx.NORMAL)
        studentText.SetFont(studentTextFont)
        # sizer
        studentTextSizer = wx.BoxSizer(wx.HORIZONTAL)
        # add to sizer
        studentTextSizer.Add(studentText, 0, wx.ALL, 5)
        # add to main sizer
        mainSizer.Add(studentTextSizer, 0, wx.LEFT, 20)

        midLine = wx.StaticLine(self, size=(9000,3))
        # sizer
        midLineSizer = wx.BoxSizer(wx.HORIZONTAL)
        # add to sizer
        midLineSizer.Add(midLine, 0, wx.ALL, 5)
        # add to main sizer
        mainSizer.Add(midLineSizer, 0, wx.Center, 0)

        correctText = wx.StaticText(self, label="Soletrando")
        correctTextFont = wx.Font(18, wx.DEFAULT, wx.NORMAL, wx.NORMAL)
        correctText.SetFont(correctTextFont)
        # sizer
        correctTextSizer = wx.BoxSizer(wx.HORIZONTAL)
        # add to sizer
        correctTextSizer.Add(correctText, 0, wx.ALL, 5)
        # add to main sizer
        mainSizer.Add(correctTextSizer, 0, wx.LEFT, 20)


        
        self.SetSizer(mainSizer)

if __name__ == '__main__':
    app = wx.App()
    operator = OperatorFrame()
    app.MainLoop()