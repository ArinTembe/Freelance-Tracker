
from rest_framework.response import Response
from .models import Project, Milestone
from .serializers import ProjectSerializer, MilestoneSerializer
from rest_framework.views import APIView

class ProjectList(APIView):

    def get(self, request):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProjectSerializer(data=request.data)
        
        if serializer.is_valid():
             serializer.save()
             return Response(serializer.data)

class ProjectDetail(APIView):

    def get(self, request, pk):

        project = Project.objects.get(id=pk)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)

    def patch(self, request, pk):
        project = Project.objects.get(id=pk)
        serializer = ProjectSerializer(
        project,
        data=request.data,
        partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
            project = Project.objects.get(id=pk)
            project.delete()
            return Response({"message": "Project deleted successfully"})

class MilestoneList(APIView):

    def get(self, request):
        milestones = Milestone.objects.all()
        serializer = MilestoneSerializer(milestones, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MilestoneSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

class MilestoneDetail(APIView):
    def get(self, request, pk):
        milestone = Milestone.objects.get(id=pk)
        serializer = MilestoneSerializer(milestone)
        return Response(serializer.data)

    def patch(self, request, pk):
        milestone = Milestone.objects.get(id=pk)
        serializer = MilestoneSerializer(
        milestone,
        data=request.data,
        partial=True
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

    def delete(self, request, pk):
         milestone = Milestone.objects.get(id=pk)
         milestone.delete()
         return Response({"message": "Milestone deleted successfully"})