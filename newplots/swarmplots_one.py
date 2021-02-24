
# importing packages
import seaborn as sns
import matplotlib.pyplot as plt

# loading dataset
data = sns.load_dataset("tips")

# plot the swarmplot
# size set to 5
sns.swarmplot(x ="day", y = "total_bill",
              data = data, size = 5)
plt.show()
