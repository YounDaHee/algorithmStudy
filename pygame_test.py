import pygame

pygame.init()

screen = pygame.display.set_mode((500,500))
clock = pygame.time.Clock()

img1 = pygame.image.load('.\File3.jpeg')
img2 = pygame.image.load('.\File4.jpeg')

while True : 
    screen.blit(img1, (0,0))
    screen.blit(img2, (100,100))
    clock.tick(30)
    pygame.display.update()
