
# importing packages
import seaborn as sns
import matplotlib.pyplot as plt

# loading dataset
data = sns.load_dataset("tips")

# plot the swarmplot
# hue by size
# oriented to horizontal
sns.swarmplot(y = "day", x = "total_bill", hue = "size",
			orient = "h", data = data)
plt.show()

