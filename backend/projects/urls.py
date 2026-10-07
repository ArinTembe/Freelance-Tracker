from django.urls import path
from .views import ProjectList, ProjectDetail, MilestoneList, MilestoneDetail

urlpatterns = [
    path("projects/", ProjectList.as_view()),
    path("projects/<int:pk>/", ProjectDetail.as_view()),
    path("milestones/", MilestoneList.as_view()),
    path("milestones/<int:pk>/", MilestoneDetail.as_view()),
]