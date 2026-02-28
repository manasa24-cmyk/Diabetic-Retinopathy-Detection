import torch
import torch.nn as nn

class SimpleModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(256, 2)

    def forward(self, x):
        return self.fc(x)

model = SimpleModel()
torch.save(model.state_dict(), "model.pth")

print("Dummy model created successfully!")