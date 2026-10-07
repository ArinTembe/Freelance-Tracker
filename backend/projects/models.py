from django.db import models
from django.contrib.auth.models import User


class Project(models.Model):
    name = models.CharField(max_length=200)
    deadline = models.DateField()

    client = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="client_projects"
    )

    freelancer = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="freelancer_projects"
    )
    def __str__(self):
        return self.name

    def progress(self):
        completed = len(self.milestones.filter(completed=True))
        total = len(self.milestones.all())
        if total == 0:
            return 0

        return completed / total * 100

    def status(self):
        total = len(self.milestones.all())
        completed = len(self.milestones.filter(completed=True))

        if total == 0:
            return "Not Started"

        if completed < total:
            return "In Progress"

        else:
            return "Completed"
    
    def total_amount(self):
        return sum(milestone.amount for milestone in self.milestones.all())
    
    def remaining_amount(self):
            return self.total_amount() - self.paid_amount()
    
    def paid_amount(self):
        paid_milestones = self.milestones.filter(paid=True)
        return sum(milestone.amount for milestone in paid_milestones)

class Milestone(models.Model):
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        related_name="milestones"
    )

    name = models.CharField(max_length=200)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    deadline = models.DateField()
    completed = models.BooleanField(default = False)
    paid = models.BooleanField(default = False)

    def __str__(self):
        return self.name

    